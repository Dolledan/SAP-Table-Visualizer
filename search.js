function buildFieldIndex(DATA) {
    // Dict = {'field': [tableName1, tableName2...]}
    let attrIndex = {};

    for (const [tableName, content] of Object.entries(DATA)){
        const fields = content.f;

        fields.forEach(fieldName => {
            const key = fieldName.toLowerCase();

            if (!attrIndex[key]) {
                attrIndex[key] = new Set();
            }
            attrIndex[key].add(tableName);
        })
    }
    return attrIndex;
}

function searchNodesByField(attrIndex, searchTerm) {
    const term = searchTerm.toLowerCase();
    let resultNodes = new Set();

    Object.keys(attrIndex).forEach(attrKey => {
        if(attrKey.includes(term)) {
            attrIndex[attrKey].forEach(nodeId => resultNodes.add(nodeId));
        }
    });

    return Array.from(resultNodes);
}