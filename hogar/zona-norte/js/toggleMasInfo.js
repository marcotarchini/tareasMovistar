             /*js toggle and others */
                                               $( document ).ready(function(){

                                               
                                                                                               
                                                     $('.toggleDetalles').click(function(){
                                                        var myId = $(this).attr('objetive');
                                                        despleGar2(myId);
                                                     });
                                                        /* con atributo href en enlaces */
                                                      function despleGar(id){
                                                        var Id = id;
                                                         if ($(id).is(':visible')){
                                                            $('a[href="'+id+'"] .toggleText').text('Más detalles');                
                                                            } else {
                                                            $('a[href="'+id+'"] .toggleText').text('Ocultar');                
                                                            }
                                                            $('a[href="'+id+'"] i.arrow').toggleClass('up', 'down');        } 
                                                           /* con atributo objetive */
                                                            function despleGar2(id){
                                                        
                                                        var Id = id;
                                                         if ($(id).is(':visible')){
                                                            $('div[objetive="'+id+'"] .toggleText').text('Más info');                
                                                            } else {
                                                            $('div[objetive="'+id+'"] .toggleText').text('Menos info');                
                                                            }
                                                            $('div.iconitoMas[objetive="'+id+'"]').toggleClass('expanded');
                                                            $(id).slideToggle('slow');

                                                                    } 


                                                });
