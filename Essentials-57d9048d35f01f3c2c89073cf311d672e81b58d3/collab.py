import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler

data = pd.read_csv('tmdb_5000_movies.csv')
print(data.head())
filtered_data = data[['title', 'vote_average', 'vote_count']].dropna()
scaler = MinMaxScaler()

filtered_data[['vote_average', 'vote_count']] = scaler.fit_transform(filtered_data[['vote_average', 'vote_count']])
movie_features = filtered_data[['vote_average', 'vote_count']].values
similarity_matrix = cosine_similarity(movie_features)

def recommend_movies(movie_title, top_n=5):
 try:
  movie_index = filtered_data[filtered_data['title'] == movie_title].index[0]
 except IndexError:
  return f"Movie '{movie_title}' not found in the dataset."
     
 similarity_scores = list(enumerate(similarity_matrix[movie_index]))
 sorted_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
 top_indices = [x[0] for x in sorted_scores[1:top_n + 1]]
 reced_movies = filtered_data['title'].iloc[top_indices].values
 return reced_movies
    
movie_to_rec = 'The Avengers' # Replace with a movie from your dataset
recs = recommend_movies(movie_to_rec, top_n=5)
print(f"Movies similar to '{movie_to_rec}':")
for movie in recs:
 print(f"- {movie}")