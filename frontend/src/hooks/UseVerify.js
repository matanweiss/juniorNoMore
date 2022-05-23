
const UseVerify = () => {

    fetch(process.env.REACT_APP_SERVER_BASE_URL + '/verify', {
        method: 'post',
        body: JSON.stringify({ user: localStorage.getItem('jwt') }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            return res;
        });
}

export default UseVerify;