import {
	BigInt,
	JSONValue,
	log,
	json,
	JSONValueKind,
	Bytes,
	ipfs,
	BigDecimal,
} from "@graphprotocol/graph-ts";
import { PostCreated } from "../generated/PublishingLogic/PublishingLogic";
import { PublicationEntity } from "../generated/schema";

export function handlePublication(event: PostCreated): void {
	// Entities can be loaded from the store using a string ID; this ID
	// needs to be unique across all entities of the same type
	// let entity = LensHub.bind(event.transaction.from.toHex())
	let pubId = event.params.pubId.toHexString();
	if (pubId.length % 2 !== 0) {
		pubId = "0x0" + pubId.slice(2);
	}
	let profileId = event.params.profileId.toHexString();
	if (profileId.length % 2 !== 0) {
		profileId = "0x0" + profileId.slice(2);
	}
	let uniqueEntityId = `${profileId}-${pubId}`;
	let entity = PublicationEntity.load(uniqueEntityId);

	if (!entity) {
		entity = new PublicationEntity(uniqueEntityId);
	}

	entity.profileId = profileId;
	log.info("$$$$$$: ProfileID: {}", [profileId]);
	entity.pubId = pubId;
	log.info("$$$$$$: pubId: {}", [pubId]);
	entity.contentURI = event.params.contentURI.toString();
	entity.timestamp = event.params.timestamp.toString();
	let contentURI = event.params.contentURI;
	log.info("$$$$$$: contentURI: {}", [contentURI]);

	// if (
	//   contentURI.includes('"traitType":"Genre"') &&
	//   contentURI.includes('"traitType":"Beats Per Minute"') &&
	//   contentURI.includes('"traitType":"Key Scale"') &&
	//   contentURI.includes('"traitType":"Beat Type"')
	// ) {
	//   entity.save();
	// }

	if (!contentURI) return;
	const ipfsHash = contentURI.slice(contentURI.lastIndexOf("ipfs") + 7);
	log.info("$$$$$$: ipfsHash: {}", [ipfsHash]);
	let ipfsData = ipfs.cat(ipfsHash);
	if (ipfsData === null) {
		return;
	}
	let data = json.fromBytes(ipfsData as Bytes).toObject();
	if (data === null) {
		return;
	}
	let metadataId = jsonToString(data.get("metadata_id"));
	if (!metadataId) {
		return;
	}
	let name = jsonToString(data.get("name"));
	let attributes = jsonToArray(data.get("attributes"));
	if (attributes.length < 6) {
		return;
	}
	let media = jsonToArray(data.get("media"));
	let audioData = media[0].toObject();
	let audioURI = jsonToString(audioData.get("item"));
	let thumbnailData = media[1].toObject();
	let thumbnailURI = jsonToString(thumbnailData.get("item"));
	let genre = attributes[0].toObject();
	let genreValue = jsonToString(genre.get("value"));
	log.info("$$$$: genre: {}", [genreValue]);
	let bpm = attributes[1].toObject();
	let bpmValue = jsonToDecimal(bpm.get("value"));
	log.info("$$$$: bpm: {}", [`${bpmValue}`]);
	let keyScale = attributes[2].toObject();
	let keyScaleValue = jsonToString(keyScale.get("value"));
	log.info("$$$$: keyScale: {}", [keyScaleValue]);
	let beatType = attributes[3].toObject();
	let beatTypeValue = jsonToString(beatType.get("value"));
	log.info("$$$$: beatType: {}", [beatTypeValue]);
	let licenseType = attributes[4].toObject();
	let licenseTypeValue = jsonToString(licenseType.get("value"));
	log.info("$$$$: licenseType: {}", [licenseTypeValue]);
	let priceType = attributes[5].toObject();
	let priceTypeValue = jsonToDecimal(priceType.get("value"));
	log.info("$$$$: priceValue: {}", [`${priceTypeValue}`]);
	if (
		!genreValue &&
		!bpmValue &&
		!keyScaleValue &&
		!beatTypeValue &&
		!licenseTypeValue &&
		!priceTypeValue
	) {
		return;
	}
	entity.genre = genreValue;
	entity.bpm = `${bpmValue}`;
	entity.keyScale = keyScaleValue;
	entity.beatType = beatTypeValue;
	entity.licenseType = licenseTypeValue;
	entity.price = `${priceTypeValue}`;
	entity.name = name;
	entity.audioURI = audioURI;
	entity.thumbnailURI = thumbnailURI;
	entity.save();
}

export function jsonToString(val: JSONValue | null): string {
	if (val !== null && val.kind === JSONValueKind.STRING) {
		return val.toString();
	}
	return "";
}
export function jsonToBigInt(val: JSONValue | null): BigInt {
	if (val !== null && val.kind === JSONValueKind.NUMBER) {
		return BigInt.fromI64(val.toI64());
	}
	return BigInt.fromI64(0);
}

export function jsonToDecimal(val: JSONValue | null): number {
	if (val !== null && val.kind === JSONValueKind.NUMBER) {
		return val.toF64();
	}
	return 0;
}

export function jsonToArray(val: JSONValue | null): Array<JSONValue> {
	if (val !== null && val.kind === JSONValueKind.ARRAY) {
		return val.toArray();
	}
	return [];
}
