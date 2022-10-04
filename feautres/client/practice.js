let rowala = 0,
    colwala = 0;
  let last, now;

  while (rowala < m && colwala < n) {
    if (rowala + 1 == m || colwala + 1 == n) break;

    last = mat[rowala + 1][colwala];

    for (let i = colwala; i < n; i++) {
      now = mat[rowala][i];
      mat[rowala][i] = last;
      last = now;
    }
    rowala++;

    for (let i = rowala; i < m; i++) {
      now = mat[i][n - 1];
      mat[i][n - 1] = last;
      last = now;
    }
    n--;

    if (rowala < m) {
      for (let i = n - 1; i >= colwala; i--) {
        now = mat[m - 1][i];
        mat[m - 1][i] = last;
        last = now;
      }
    }
    m--;

    if (colwala < n) {
      for (let i = m - 1; i >= rowala; i--) {
        now = mat[i][colwala];
        mat[i][colwala] = last;
        last = now;
      }
    }
    colwala++;
  }
  for (let i = 0; i < 4; i++) {
    let rowala = [];
    for (let j = 0; j < 4; j++) {
      rowala.push(mat[i][j]);
    }
    console.log(...rowala);
  }
}