var AWS = require('aws-sdk');

exports.handler = async (event) => {
    try {        
        console.log(event)
        console.log(event.body)

        var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'})
        var params = {
            TableName: 'contact',
            Item: {
                 id : Date.now().toString,
                 data: JSON.parse(event.body)
            }
        };
        
        ddb.putItem(params, function(err,data){
            if(err){
                console.log("Error: ", err);
            }
            else
            {
                console.log("Item entered successfully:", data);
            }
        });

        
        var response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'Data entered successfully'
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};
