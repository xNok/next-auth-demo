export default function handler(req, res) {
	const { email, password } = req.body;
	if (email === "abc@xyz.com" && password === "password") {
    	res.status(200).json({ id: 1, name: "J Smith", email: "abc@xyz.com" });
	} else {
    	res.status(401).json({ message: "Invalid credentials" });
	}
}