async function login(userName, password) {
  if (userName === '' && password === '') {
    alert('请输入有效的账号和密码')
  } else {
    await this.$http
      .post('/user/login', {
        userName: this.userName,
        userPwd: this.password,
      })
      .then(({ data: res }) => {
        if (res.data === null) {
          alert(res.msg)
        } else {
          console.log(res.data)
          this.token = res.data
          localStorage.setItem('Authorizatio', res.data)
          this.$router.push('/home')
        }
      })
  }
}
