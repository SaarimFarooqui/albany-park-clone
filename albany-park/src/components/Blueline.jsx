export default function Blueline(){
    return(
        <div
            style={
                {   
                    backgroundColor : "var(--announcement)", 
                    width: "100%", 
                    padding: "6px 0px",
                    display: "flex",
                    justifyContent: "center"
                }
            
            }
        ><p
            style = {
                {
                    color: "white",
                    fontFamily: "Inter",
                    fontSize: "12px",
                    letterSpacing: "2px"
                }
            }
        >Enjoy Complimentary Shipping</p></div>
    )
}