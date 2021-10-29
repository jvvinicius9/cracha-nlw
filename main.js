const link_social_media = {
  //esse objeto está armazenando os usuarios de cada link das redes sociais
  github: 'jvvinicius9',
  linkedin: 'in/joão-vinícius-siqueira-474a6716b',
  facebook: 'joao.vinicius.7771586',
  instagram: 'joaovinicius231'
}

// função para mudar os links das redes sociais
function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class') // pega cada uma das li's que estão dentro da ul pela classe

    li.children[0].href = `https://${social}.com/${link_social_media[social]}` // pega o primeiro filho de cada li e muda o href para o link de cada rede social, utiliza as classes das li's e o nome de cada link na const link_social_media para pegar o usuario de cada rede social
  }
}
change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${link_social_media.github}`

  fetch(url) //bater na url, pegar o que ela responde e nos entregar
    .then(response => response.json()) // pegar a resposta da fetch e transformar em json
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_github_link.href = data.html_url
      user_image.src = data.avatar_url
      user_login.textContent = data.login
    }) //vai pegar a resposta em json e armazenar no data (arrow function)
}

get_github_profile_infos()
