var get_intersection = require('../../../main/collectionOperator/get_intersection.js');

function collect_same_elements(collection_a, collection_b) {
  return get_intersection(collection_b, collection_a)
}

module.exports = collect_same_elements;
