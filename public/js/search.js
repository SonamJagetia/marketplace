var client = algoliasearch('57FUNDOU3R', 'dae84ebde938e4a90d4291076aa77029');
var index = client.initIndex('GigSchema');
//initialize autocomplete on search input (ID selector must match)
autocomplete('#aa-search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'name',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<a href="/service_detail/' + suggestion.ObjectID+'"><span>' +
            suggestion._highlightResult.title.value + '</span></a>';
        }
    }
});
