</script><script type="text/javascript">
$(document).ready(function() {

            Hyphenator.config({
                    classname : 'hyphenate',
                    defaultlanguage: 'en',
                    minwordlength: 8,
                    donthyphenateclassname : 'header'
            });
            Hyphenator.run();


            $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                    event.preventDefault();
                    $(this).ekkoLightbox();
            }); 
            $('#youtube').magnificPopup();
        });
  </script>
