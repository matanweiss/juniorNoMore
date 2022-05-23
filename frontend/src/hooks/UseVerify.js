const UseVerify = () => {

    let result = false;

    fetch(process.env.REACT_APP_SERVER_BASE_URL + '/verify', {
        method: 'post',
        body: JSON.stringify({ token: localStorage.getItem('jwt') }),
        headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${localStorage.getItem('jwt')}` }
    }).then(res => {
        result = res.ok ? true : false;
    });
    return result;
}

export default UseVerify;