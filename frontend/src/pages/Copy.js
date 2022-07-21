const footer ={
    position : 'fixed',
    bottom : '0%',
    left : '39%'
}

function Copy(){
    return(
        <div style={footer}>
            <p >
                Copyright &copy;{new Date().getFullYear()} Weather Inc. - All rights reserved
            </p>
        </div>
    )
}

export default Copy;