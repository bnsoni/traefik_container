(function($) {
    

    $(document).ready(function(){
        $('button.clicker').on('click', clickHandler);
        // Define the clickHandler function, as before
        function clickHandler(event) {
        //    alert('clicked')
        



            $.ajax('http://wptwo.localhost/wp-json/ibl/api/interview/',   // request url
            {   
                    type: 'GET',
                    headers: {'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE2MzU1MzA4MDAifQ.eyJpZCI6IjhibHpoZjRoaW9zOGVxdWhjM29peHFnZGNuc3RkY3huY2Z5MTdndW0iLCJqdGkiOiI4Ymx6aGY0aGlvczhlcXVoYzNvaXhxZ2RjbnN0ZGN4bmNmeTE3Z3VtIiwiaXNzIjoiaHR0cHM6XC9cL3dwdHdvLmxvY2FsaG9zdCIsImF1ZCI6IlJjNXB4dmZaaWRZTzRWNDc4OFU5cUpKSUVFZkd1cER5MW5LOFFRM00iLCJzdWIiOiIxIiwiZXhwIjoxNjM1NzI1MDk5LCJpYXQiOjE2MzU3MjE0OTksInRva2VuX3R5cGUiOiJiZWFyZXIiLCJzY29wZSI6ImJhc2ljIn0.vzjvdIMkK5YqFxApXsoqipZPjc3sif0sK-IjVbW9aGzX9mz5N78V7bbI3PzTrNo1KOZprRSyT1REn6m3j4z2F_jS7t2NOVVvR9SfrBZAXAcbxBHWxnxGYtZx6xMRVrIz3C9yHpUnzup-96CDzwgZ8CW4JfUlqmasqlknC2aR5mA0DjHzHE2gxPrv2AbXf-70xmpXcWovGCOtTXL36YXi1MEb3_B5XKIhsD3MY14ww4uhDCZhg6Lm5-QVi5UDgOWCkyyvjHs_GX9Qx-2HyaRtJcuX-rMXNlWk5nRkQelDwhF5BgcW_XeyPxZi4hHTxi89Ug7fqmsbAyG7Qix2nC-uGg'},
                    success: function (data, status, xhr) {// success callback function
                        console.log(data);
                        $('p.apipanel').text(data);
                    }
            });
        }
        
    });
})(jQuery);