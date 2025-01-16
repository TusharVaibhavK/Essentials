import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import AdaBoostClassifier
from sklearn.metrics import classification_report, confusion_matrix

data = pd.read_csv('craving_nutrition.csv')
data['combine'] = data['Craving Type'].fillna('') + "-" + data['Craving Food'].fillna('')
X = data['combine']
y = data['Nutrient Deficiency']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=24)

# Convert text data to numeric using TF-IDF
vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train and evaluate the AdaBoost model
model = AdaBoostClassifier(n_estimators=120, random_state=42)
model.fit(X_train_vec, y_train)
y_pred = model.predict(X_test_vec)

print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred,zero_division=0))