import AuthPayload from "@/src/AuthPayload.js";
import Client from "@/src/Client.js";
import ClientOps from "@/src/ClientOps.js";
import ClientQuery from "@/src/ClientQuery.js";
import Message from "@/src/Message.js";
import MessageThread from "@/src/MessageThread.js";
import Mutation from "@/src/Mutation.js";
import PublicMutation from "@/src/PublicMutation.js";
import Query from "@/src/Query.js";
import SalonAnalytics from "@/src/SalonAnalytics.js";
import SalonClient from "@/src/SalonClient.js";
import SalonClientOps from "@/src/SalonClientOps.js";
import SalonOps from "@/src/SalonOps.js";
import SalonProfile from "@/src/SalonProfile.js";
import SalonQuery from "@/src/SalonQuery.js";
import Service from "@/src/Service.js";
import ServiceOps from "@/src/ServiceOps.js";
import UserOps from "@/src/UserOps.js";
import UserQuery from "@/src/UserQuery.js";
import Visit from "@/src/Visit.js";
import VisitOps from "@/src/VisitOps.js";
import { createResolvers } from "@/src/axolotl.js";

const resolvers = createResolvers({
	...Query,
	...Mutation,
	...AuthPayload,
	...ClientQuery,
	...ClientOps,
	...Client,
	...MessageThread,
	...Message,
	...PublicMutation,
	...SalonProfile,
	...SalonAnalytics,
	...SalonOps,
	...SalonClientOps,
	...SalonClient,
	...SalonQuery,
	...Service,
	...ServiceOps,
	...UserQuery,
	...UserOps,
	...Visit,
	...VisitOps
});

export default resolvers;
