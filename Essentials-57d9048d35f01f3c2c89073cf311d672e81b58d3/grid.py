import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

data = pd.read_csv("craving_nutrition.csv")
data = data.dropna(subset=['Craving Type', 'Craving Food', 'Nutrient Deficiency']) 

# Combine the columns 'Craving Type' and 'Craving Food' for feature creation
data['combined'] = data['Craving Type'].fillna('') + " " + data['Craving Food'].fillna('')

# Features and target
X = data['combined']
y = data['Nutrient Deficiency']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=24)

vectorizer = TfidfVectorizer()
model = RandomForestClassifier(random_state=42)
param_grid = {
    'n_estimators': [100, 120, 150],
    'max_depth': [10, 16, 20],
    'min_samples_leaf': [1, 2, 4]
}

# Set up GridSearchCV with 3-fold cross-validation
grid_search = GridSearchCV(estimator=model, param_grid=param_grid, cv=3, n_jobs=-1, verbose=2)
grid_search.fit(vectorizer.fit_transform(X_train), y_train)

print(f"Best Parameters: {grid_search.best_params_}")
y_pred = grid_search.best_estimator_.predict(vectorizer.transform(X_test))
print(classification_report(y_test, y_pred,zero_division=0))