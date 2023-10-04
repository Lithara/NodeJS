fs.readFile('file.txt', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    fs.readFile('file.txt', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        fs.readFile('file.txt', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(data)
          }) 
      })      
  })
  