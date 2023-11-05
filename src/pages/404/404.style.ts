import styled from "styled-components";

export const Page404Style = styled.main`
    #main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
    font-family: 'Lato', sans-serif;
    
}

.erro404{
        font-family: 'Lato', sans-serif;
        font-size: 110px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        
        
}

.erro404 h1{
      font-family: 'Lato', sans-serif;
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}



    @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }

`