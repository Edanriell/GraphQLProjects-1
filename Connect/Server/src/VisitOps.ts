import { createResolvers } from "@/src/axolotl.js";
import { MongOrb, VisitModel } from "@/src/orm.js";

export default createResolvers({
	VisitOps: {
		delete: async (yoga) => {
			const src = yoga[0] as VisitModel;
			const result = await MongOrb("Visit").collection.deleteOne({
				_id: src._id
			});
			return !!result.deletedCount;
		},
		update: async (yoga, args) => {
			const src = yoga[0] as VisitModel;
			await MongOrb("Visit").collection.updateOne(
				{
					_id: src._id
				},
				{
					$set: {
						...args.visit
					}
				}
			);
		}
	}
});
