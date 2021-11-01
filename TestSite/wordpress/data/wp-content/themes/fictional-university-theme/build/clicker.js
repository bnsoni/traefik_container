(function($) {
    

    $(document).ready(function(){
        $('button.clicker').on('click', clickHandler);
        // Define the clickHandler function, as before
        function clickHandler(event) {
        //    alert('clicked')
        



            $.ajax('http://wptwo.localhost/wp-json/ibl/api/interview/',   // request url
            {   
                    dataType: 'JSON',
                    type: 'GET',
                    headers: {'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE2MzU1MzA4MDAifQ.eyJpZCI6Iml5ZmxuY2Zucm5tZ2s3amJ3dW04b2xybDl4bHNraW96cDd0c29jdXEiLCJqdGkiOiJpeWZsbmNmbnJubWdrN2pid3VtOG9scmw5eGxza2lvenA3dHNvY3VxIiwiaXNzIjoiaHR0cHM6XC9cL3dwdHdvLmxvY2FsaG9zdCIsImF1ZCI6IlJjNXB4dmZaaWRZTzRWNDc4OFU5cUpKSUVFZkd1cER5MW5LOFFRM00iLCJzdWIiOiIxIiwiZXhwIjoxNjM1Nzg1NzcwLCJpYXQiOjE2MzU3ODIxNzAsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJzY29wZSI6ImJhc2ljIn0.bdIFotidnNBGGxdQlzQFqtLt8d3CbYXdWyQsnmnNQ6k5ChJhnQd80g_RZ3ZPr57omCX2M1YWeDWK8VmjWjlCSD48MVwEzDPPL2r_Ap5C-1sP9llD0OCHS9DoFtt12k0GDbAG_4depqjWsGmrtmhqO0eV0rOx7lbiYvxm1kpeMTbD6tozUSA86n5MXFPe8uVBnYYsVIm_oQTrnfBFpK9sAGGRspqyk86gfw0ihEPgZl3ClNwfqSSipOH2mAwWjz7R8PAPRyzDPhF0skF-oErfzPXtUwPtUxAJl4nodKj19MzSoWBvDncpgkej5_vFZd5klFkvuHjxjr4ZRTSVCEJNLw'},
                    success: function (data, status, xhr) {// success callback function
                        console.log(data);
                        //$('p.apipanel').text(data[0]);

                        var len = data.len;
                        var displayText = '';

                        for(var i = 0; i < data.length; i++){
                            var id = data[i].id;
                            var greeting = data[i].greeting;

                            displayText = displayText + greeting + '\n'
                            //displayText = displayText + id + ' ' + greeting + ' '                         
                        }

                        $('textarea.apipanel').text(displayText);
                    }
            });
        }
        
    });
})(jQuery);