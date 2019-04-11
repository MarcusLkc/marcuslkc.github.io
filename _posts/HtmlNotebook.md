

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
```


```python
df = pd.DataFrame(data={"A": [1,2,3], "B":[69, 55, 45]})
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>69</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>55</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>45</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.plot.scatter(x="A", y="B", s=[size *3 for size in df.B.values])
```




    <matplotlib.axes._subplots.AxesSubplot at 0x21124ea41d0>




![png](output_3_1.png)



```python

```
