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
        apidata: {type: "string"},
        accesstoken: {type: "string"}
    },
 
    edit: function(props) { 

        //props.setAttributes({apidata: "loading"});
        
        

        async function componentGetApi(){
            const url = props.attributes.wpurl;
            const accesstoken = props.attributes.accesstoken;
            const userinput = props.attributes.userinput;

            fetch( url + userinput.replace(/\s/g, '+') )
            .then( response => response.json() )
            .then( response => {
                console.log(response);
            // Do something with response.
            } );
            
        }

        function showAlert(){
            alert("A test alert");
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
        function updateaccesstoken(){
            props.setAttributes({accesstoken: event.target.value})
        }
        

        async function sendGreeting(){
            const data = {
                "greeting": props.attributes.userinput
            };
            const accesstoken = props.attributes.accesstoken;

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accesstoken
                },
                body: JSON.stringify(data)
            }
            const posturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+') //replace spaces with +
            
            const response = await fetch(posturl, options);
            console.log(response);
        }

        async function getGreeting(){
            const accesstoken = props.attributes.accesstoken;

            const options = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accesstoken
                }
            }
            const geturl = props.attributes.wpurl + props.attributes.userinput.replace(/\s/g, '+') //replace spaces with +
            
            const response = await fetch(geturl, options);
            console.log(response.json());
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
                    <PanelBody>
                        <p>Provide a Token:</p>
                        <input type="text" placeholder = "Access Token" value = {props.attributes.accesstoken} onChange={updateaccesstoken}/>
                    </PanelBody>
                </InspectorControls>,

                <div>
                    <input type="text" placeholder = "UserInput" value = {props.attributes.userinput} onChange={updateUserinput}/>
                </div>,
                <br/>,
                <div>
                    {/*<input type="text" placeholder = "Post onChange" value = {props.attributes.apidata} onChange={sendGreeting}/>*/}
                    <button type="button" onClick={sendGreeting}>Post a Greeting</button>
                </div>
            
        ]);
	},
    save: function(props) {
        return wp.element.createElement(
           "div", {
              className: "gblock"
           },
           wp.element.createElement(
            "button",
            {style: {padding: '4px', border: '2px solid black'}, class: 'clicker'},
            "GET Greeting"
           ),
           wp.element.createElement(
              "p", 
              {
                 class: 'apipanel'
              },
              ""
           )
        )
    }
});