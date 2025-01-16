import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
data = pd.read_csv('tmdb_5000_credits.csv')
print(data.head())
data['cast'] = data['cast'].fillna('')
data['crew'] = data['crew'].fillna('')

data['combined_features'] = data['cast'] + " " + data['crew']

vectorizer = CountVectorizer(stop_words='english')
feature_matrix = vectorizer.fit_transform(data['combined_features'])
similarity_matrix = cosine_similarity(feature_matrix, feature_matrix)

def recommend_movies(movie_title, top_n=5):
    try:
        movie_index = data[data['title'] == movie_title].index[0]
    except IndexError:
        return f"Movie '{movie_title}' not found in the dataset."
    
    similarity_scores = list(enumerate(similarity_matrix[movie_index]))
    sorted_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
    top_indices = [x[0] for x in sorted_scores[1:top_n + 1]]
    reced_movies = data['title'].iloc[top_indices].values
    return reced_movies

movie_to_rec = 'The Dark Knight Rises'
recs = recommend_movies(movie_to_rec, top_n=5)
print(f"Movies similar to '{movie_to_rec}':")
for movie in recs:
    print(f"- {movie}")