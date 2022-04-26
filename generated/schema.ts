// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PublicationEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("profileId", Value.fromString(""));
    this.set("pubId", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("contentURI", Value.fromString(""));
    this.set("bpm", Value.fromString(""));
    this.set("genre", Value.fromString(""));
    this.set("keyScale", Value.fromString(""));
    this.set("beatType", Value.fromString(""));
    this.set("licenseType", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
    this.set("audioURI", Value.fromString(""));
    this.set("thumbnailURI", Value.fromString(""));
    this.set("price", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PublicationEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PublicationEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PublicationEntity", id.toString(), this);
    }
  }

  static load(id: string): PublicationEntity | null {
    return changetype<PublicationEntity | null>(
      store.get("PublicationEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileId(): string {
    let value = this.get("profileId");
    return value!.toString();
  }

  set profileId(value: string) {
    this.set("profileId", Value.fromString(value));
  }

  get pubId(): string {
    let value = this.get("pubId");
    return value!.toString();
  }

  set pubId(value: string) {
    this.set("pubId", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get bpm(): string {
    let value = this.get("bpm");
    return value!.toString();
  }

  set bpm(value: string) {
    this.set("bpm", Value.fromString(value));
  }

  get genre(): string {
    let value = this.get("genre");
    return value!.toString();
  }

  set genre(value: string) {
    this.set("genre", Value.fromString(value));
  }

  get keyScale(): string {
    let value = this.get("keyScale");
    return value!.toString();
  }

  set keyScale(value: string) {
    this.set("keyScale", Value.fromString(value));
  }

  get beatType(): string {
    let value = this.get("beatType");
    return value!.toString();
  }

  set beatType(value: string) {
    this.set("beatType", Value.fromString(value));
  }

  get licenseType(): string {
    let value = this.get("licenseType");
    return value!.toString();
  }

  set licenseType(value: string) {
    this.set("licenseType", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get audioURI(): string {
    let value = this.get("audioURI");
    return value!.toString();
  }

  set audioURI(value: string) {
    this.set("audioURI", Value.fromString(value));
  }

  get thumbnailURI(): string {
    let value = this.get("thumbnailURI");
    return value!.toString();
  }

  set thumbnailURI(value: string) {
    this.set("thumbnailURI", Value.fromString(value));
  }

  get price(): string {
    let value = this.get("price");
    return value!.toString();
  }

  set price(value: string) {
    this.set("price", Value.fromString(value));
  }
}
