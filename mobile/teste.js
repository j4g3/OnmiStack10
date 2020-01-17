const api = require('./src/services/api')

const request = async () => {
  const response = await api.get('/search', {
    params: {    latitude:-23.0893284,
      longitude:-48.9164439,
      techs: 'ReactJS'}
  });
  console.log(response)
}
request()