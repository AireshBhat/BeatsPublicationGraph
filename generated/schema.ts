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

export class MetadataEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bpm", Value.fromI32(0));
    this.set("genre", Value.fromString(""));
    this.set("keyScale", Value.fromString(""));
    this.set("type", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MetadataEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MetadataEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MetadataEntity", id.toString(), this);
    }
  }

  static load(id: string): MetadataEntity | null {
    return changetype<MetadataEntity | null>(store.get("MetadataEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bpm(): i32 {
    let value = this.get("bpm");
    return value!.toI32();
  }

  set bpm(value: i32) {
    this.set("bpm", Value.fromI32(value));
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

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }
}

export class PublicationEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("profileId", Value.fromString(""));
    this.set("pubId", Value.fromString(""));
    this.set("contentURI", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
    this.set("metadata", Value.fromString(""));
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

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value!.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }
}