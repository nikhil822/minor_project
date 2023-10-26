import  '../Styles/prodDesc.css'
function ProdDesc() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      
    return (
        <div className="prodDesc">


            <div className="cont reveal">
                
                    <img src="https://images.unsplash.com/photo-1578604665675-9aee692f6ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbGx1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    className="img"
                    id="img1"
                     alt='imagesforreact' />
                
                <div className="prodTextRight">
                    <h1>Lorem Ipsum</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>

            <div className="cont2 reveal">
                <div className="prodTextLeft">
                    <h1>Lorem Ipsum</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1626024134882-b1fcdc3e9902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW50JTIwZ3Jvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    className="img"
                    id="img2"
                     alt='imagesforreact' />
            </div>

            <div className="cont reveal">

            <img src="https://images.unsplash.com/photo-1598902468171-0f50e32a7bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnQlMjBudXJzZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                    className="img"
                    id="img3"
                     alt='imagesforreact' />

                <div className="prodTextRight">
                    <h1>Lorem Ipsum</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>

            {/* <div className="cont2 reveal">
                <div className="prodTextLeft">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <img src="https://images.unsplash.com/photo-1597755269789-89407cf1a199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    className="img"
                    id="img4"
                     alt='imagesforreact' />

            </div> */}

        </div>

    )
}
export default ProdDesc;