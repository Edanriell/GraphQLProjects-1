import { createResolvers } from "@/src/axolotl.js";
import { MongOrb, VisitModel } from "@/src/orm.js";

export default createResolvers({
	Visit: {
		client: async (yoga) => {
			const src = yoga[0] as VisitModel;
			return MongOrb("Client").collection.findOne({
				_id: src.client
			});
		},
		service: async (yoga) => {
			const src = yoga[0] as VisitModel;
			return MongOrb("Service").collection.findOne({
				_id: src.service
			});
		}
	}
});
