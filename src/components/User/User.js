import style from './User.modal.css';

function User(props){

    return(

        <div className={style.user}>
            <p>{props.username + " ( "+ props.age + " years old )"}</p>   
        </div>
    );

}

export default User;