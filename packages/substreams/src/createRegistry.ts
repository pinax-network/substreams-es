import type { Package } from "./generated/sf/substreams/v1/package_pb.js";
import { type IMessageTypeRegistry, createDescriptorSet, createRegistryFromDescriptors } from "@bufbuild/protobuf";

export function createRegistry(substream: Package): IMessageTypeRegistry {
  return createRegistryFromDescriptors(createDescriptorSet(substream.protoFiles));
}
