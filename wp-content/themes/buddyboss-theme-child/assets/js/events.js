function editPastButtonHref() {
  var urlParams = new URLSearchParams(window.location.search);
  var eventSearchParam = urlParams.get('event-search');
  jQuery(".tribe-past, .tribe-upcoming").each(function(index, item) {
    if(eventSearchParam) {
      var $item = $(item);
      var href = new URL($item.attr('href'));
      href.searchParams.set('event-search', eventSearchParam);
      $item.attr('href', href.toString())
    }
  });
}

function eventsFilterOnChange() {
  var $element = $('#events-categories-filter');
  if($element.length) {
    $element.on('change', function() {
      var $this = $(this);
      var href = $this.find('option:selected').attr('value');
      window.location.href = href;
    })
  }
}

function changePrevNextEventsLabels() {
  var $items = $('#tribe-events-footer .tribe-events-sub-nav a');
  if($items.length) {
    $('#tribe-events-footer .tribe-events-sub-nav a').each(function(_, element) {
      console.log(element);
      var $this = $(element);
      var parent = $this.parent();
      var label = $this.html();
      if(parent.hasClass('tribe-events-nav-previous')) {
        label = 'Évènement précédent';
      }
      if(parent.hasClass('tribe-events-nav-next')) {
        label = 'Évèvenement suivant';
      }
      $this.html(label);
    });
  }
  
}

// init
jQuery(document).ready(function() {
  editPastButtonHref();
  eventsFilterOnChange();
  changePrevNextEventsLabels();
})