import React, { Component } from 'react';
import "../styles/matlab.css"

export class Matlab extends Component {
  state={
    profileImg:'https://img.hyperise.io/i/123456789.png'
  }
  submitHandles = (e) => {
	  console.log(e)
	  e.preventDefault();
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  postImage = (e) => {
	  e.preventDefault();
	  let img_input = document.getElementById('input')
	  // let data = new FormData(myForm)
	  const formData = new FormData()
	  formData.append('file', img_input.files[0])
	  fetch("http://127.0.0.1:5000/matlab", {
		  method: 'POST',
		  body: formData,
	  }).then(r => r.json())
		  .then(data => console.log(data))
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="cont">
					<h1 className="heading">Sprawdź swoją zmianę skórną!</h1>
					<form id = "myForm" name = "myForm" encType="multipart/form-data" onSubmit={this.postImage}>
					{/*<form action="http://127.0.0.1:5000/matlab" method='post' encType="multipart/form-data">*/}
						<div className="img-holder">
							<img src={profileImg} alt=""  className="img2" />
						</div>
						<div className="sender2">
						<input type="file" name="image-upload" id="input" onChange={this.imageHandler} />
						<div className="label">
							<label className="image-upload" htmlFor="input">
								<p>Wybierz zdjęcie</p>
							</label>
							<label>
								<button className="analysis" type="submit">
									<p>Analizuj</p>
								</button>

							</label>
						</div>
						</div>
					</form>
					<div className="info">
						<p>Jeśli chcesz zachować wynik, podaj adres e-mail. Dostaniesz wiadomość z informacją o wyniku.</p>
					</div>
					<form action="http://127.0.0.1:5000/mail" method="post">
					<div className="sender">
          				<input type="email" id="email" name="email" placeholder="przyklad@email.com"/>
          				<button type="submit">Wyślij</button>
        			</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Matlab;