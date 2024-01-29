import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log("handler", req.headers);
	if (req.method !== "GET") {
		return res.status(405).end();
	}

	return res.status(200).json("components");
}
