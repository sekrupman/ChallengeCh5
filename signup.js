router.post('/user', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
  if (!username || !email || !password) {
      res.status(400).send('Harap isi semua data');
      return;
    }
  
    const userData = (`${username},${email},${password}\n`);
    fs.appendFile('user.txt', userData, (err) => {
      if (err) throw err;
      console.log('Data user berhasil disimpan!');
      res.send('Data user berhasil disimpan!');
},)})