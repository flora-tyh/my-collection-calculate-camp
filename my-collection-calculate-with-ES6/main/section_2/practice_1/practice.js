function count_same_elements(collection) {
  //在这里写入代码
  var count_obj = {};
  collection.forEach(element => {
    if (count_obj[element]) {
      count_obj[element]++;
    } else {
      count_obj[element] = 1;
    }
  })
  var result = [];
  for (var i in count_obj) {
    var collection_count = {};
    collection_count.key = i;
    collection_count.count = count_obj[i];
    result.push(collection_count)
  }
  return result;
}

module.exports = count_same_elements;
