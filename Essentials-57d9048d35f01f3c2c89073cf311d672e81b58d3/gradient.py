import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score,classification_report,confusion_matrix
from sklearn.pipeline import Pipeline

data = pd.read_csv("craving_nutrition.csv")
data['text'] = data['Craving Type'].fillna('') + " " + data['Nutrient Deficiency'].fillna('')
X, y = data['text'], data['Healthier Alternative']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', max_features=2000)),
    ('classifier', GradientBoostingClassifier())
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"\nAccuracy: {accuracy:.2f}")
print(classification_report(y_test,y_pred,zero_division=0))
print(confusion_matrix(y_test,y_pred))