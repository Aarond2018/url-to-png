const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: "ddmm5ofs1",
	api_key: "349758175856323",
	api_secret: "QC1zogF_7qeyX0ErdAjtpYMlsAo",
	secure: true,
});

export default function handler(req, res) {
	const imageShot = cloudinary.image(req.body.url, {
		type: "url2png",
		sign_url: true,
	});
	console.log(req.body.url);
	res.status(200).json({ name: imageShot });
}
