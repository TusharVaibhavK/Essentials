import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from xgboost import XGBClassifier
from sklearn.metrics import classification_report
from sklearn.preprocessing import LabelEncoder

data = pd.read_csv("craving_nutrition.csv")
X = data['Craving Type'] + " " + data['Craving Food']
y = LabelEncoder().fit_transform(data['Nutrient Deficiency'])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=20)

vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

model = XGBClassifier(
    max_depth=2,
    min_child_weight=4,
    eval_metric='mlogloss',
    objective='multi:softmax'
)
model.fit(X_train_vec, y_train)
y_pred = model.predict(X_test_vec)
print(classification_report(y_test, y_pred,zero_division=0))