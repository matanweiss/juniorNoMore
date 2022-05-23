const UseVerify = () => {

    fetch(process.env.REACT_APP_SERVER_BASE_URL + '/verify', {
        method: 'post',
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.ok ? true : false;
    });
}

export default UseVerify;