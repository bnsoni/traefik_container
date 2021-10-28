const{registerBlockType} = wp.blocks;
const{
    RichText,
    InspectorControls,
    ColorPalette
} = wp.editor;
const{ PanelBody } = wp.components;

registerBlockType('bnsgutengerg/testblock', {
	title: 'My Custom Block',
	description: 'A Blank new block',
    icon: 'smiley',
    category: 'text',
    attributes: {
        userinput: {type: "string"},
        wpurl: {type: "string"},
        clientid: {type: "string"},
        clientsecret: {type: "string"},
        apidata: {type: "string"}
    },
 
    edit: function(props) { 

        //props.setAttributes({apidata: "loading"});
        
        

        async function componentGetApi(){
            const url = "http://localhost:9001/wp-json/ibl/api/interview";
            const response = await fetch(url);
            const data = await response.json();
            const greetingData = await data[0];

            console.log(greetingData['greeting']);
            props.setAttributes({apidata: greetingData['greeting']});
            
        }

        //componentGetApi();

        function updateUserinput(){
            props.setAttributes({userinput: event.target.value})
        }
        function updatewpurl(){
            props.setAttributes({wpurl: event.target.value})
        }

        function updateclientid(){
            props.setAttributes({clientid: event.target.value})
        }
        function updateclientsecret(){
            props.setAttributes({clientsecret: event.target.value})
        }
        

        async function sendGreeting(){
            const data = {
                "greeting": props.attributes.userinput
            };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const posturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+') //replace spaces with +
            
            const response = await fetch(posturl, options);
            console.log(response);
        }

		return ([
            
                <InspectorControls>
                    <PanelBody>
                        <p>Provide a URL:</p>
                        <input type="text" placeholder = "Wordpress URL:" value = {props.attributes.wpurl} onChange={updatewpurl}/>
                    </PanelBody>
                    <PanelBody>
                        <p>Provide a Client ID:</p>
                        <input type="text" placeholder = "Client ID" value = {props.attributes.clientid} onChange={updateclientid}/>
                    </PanelBody>
                    <PanelBody>
                        <p>Provide a Client Secret:</p>
                        <input type="text" placeholder = "Client Secret" value = {props.attributes.clientsecret} onChange={updateclientsecret}/>
                    </PanelBody>
                </InspectorControls>,

                <div>
                    <input type="text" placeholder = "UserInput" value = {props.attributes.userinput} onChange={updateUserinput}/>
                </div>,
                <br/>,
                <div>
                    {/*<input type="text" placeholder = "Post onChange" value = {props.attributes.apidata} onChange={sendGreeting}/>*/}
                    <button type="button" onClick={sendGreeting}>Post Greeting</button>
                </div>
            
        ]);
	},
    save: function (props) {

        return (
            <div>
                {/*<input type="text" placeholder = "Post onChange" value = {props.attributes.apidata} onChange={sendGreeting}/>*/}
                <button type="button">GET Greeting</button>
            </div>
        );
    }
});