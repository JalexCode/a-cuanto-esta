import '../styesheets/header.css'

function HeaderComponent () {

    return (
    <div className='header'>
        <p>A Cuánto Está?</p>
        <div>
            <box-icon type='solid' name='info-circle'></box-icon>
        </div>
        

        {/* <p className='tinny-text'>Developed by <a href='https://github.com/JalexCode' target='_blank' rel="noreferrer">JalexCode</a></p> */}
    </div>
    );
}
export default HeaderComponent;