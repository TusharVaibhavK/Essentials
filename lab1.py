import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import adfuller
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.arima.model import ARIMA

df = pd.read_csv("monthly_agg_sales.csv")
print(df.head())

def plot_df(df, x, y, title="", xlabel='month', ylabel='Sales', dpi=100):
    plt.figure(figsize=(15, 4), dpi=dpi)
    plt.plot(x, y, color='tab:red')
    plt.gca().set(title=title, xlabel=xlabel, ylabel=ylabel)
    plt.show()

plot_df(df, x=df['month'], y=df['Sales'], title='Time Series Analysis')

train, test = df.head(42), df.tail(6)

for series in [train['Sales'], train['Sales'].shift(1)]:
    result = adfuller(series.dropna())
    print(f'ADF Statistic: {result[0]:.6f}, p-value: {result[1]:.6f}')

train.set_index('month', inplace=True)
test.set_index('month', inplace=True)

fig, axes = plt.subplots(2, 1, figsize=(12, 8))
plot_acf(train['Sales'].dropna(), lags=15, ax=axes[0])
plot_pacf(train['Sales'].dropna(), lags=15, ax=axes[1])
plt.show()

model_fit = ARIMA(train['Sales'], order=(1, 0, 1)).fit()
print(model_fit.summary())
predictions = model_fit.forecast(steps=6)

mse = np.mean((predictions.values - test['Sales'])**2)
mape = np.mean(np.abs(test['Sales'] - predictions.values) / test['Sales']) * 100
print(f'ARIMA Model Test Data MSE: {mse:}')
print(f'ARIMA Model Test Data MAPE: {mape:}')