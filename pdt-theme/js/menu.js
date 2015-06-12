$jq(document).ready(function () {
    $jq.widget( "custom.catcomplete", $jq.ui.autocomplete, {
        _create: function() {
          this._super();
          this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
        _renderMenu: function( ul, items ) {
          var that = this,
            currentCategory = "";
          $jq.each( items, function( index, item ) {
            var li;
            if ( item.category != currentCategory ) {
              ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
              currentCategory = item.category;
            }
            li = that._renderItemData( ul, item );
            if ( item.category ) {
              li.attr( "aria-label", item.category + " : " + item.label );
            }
          });
        }
    });


    $jq("#menu-accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

    var autoCompleteValues = [];
    $jq.each(
        $jq('#menu-accordion>h3'), 
        function(){
            var newCategory = $jq.trim($jq(this).text());
            var newLinks = $jq(this).next('div').find('a');
            
            $jq.each(
                newLinks,
                function(){                 
                    autoCompleteValues.push({
                        "label": $jq.trim($jq(this).text()),
                        "category": newCategory
                    });
                }
            );
        }
    );

    $jq("#menu-search").catcomplete({
      delay: 0,
      source: autoCompleteValues
    });
});
