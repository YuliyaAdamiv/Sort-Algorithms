const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const bubble = (arr) => {
    let len = arr.length;
    let i, j, end;

    for (i = 0; i < len; i++) {
        end = len - i;
        for (j = 0; j < end; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                console.log();
            }
        }
        showElement(arr);
    }
    return arr;
};