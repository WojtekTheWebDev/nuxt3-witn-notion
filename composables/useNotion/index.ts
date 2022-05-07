import { Client } from "@notionhq/client";

export const useNotion = () => {
  const runtimeConfig = useRuntimeConfig();

  const client = new Client({
    auth: runtimeConfig.apiSecret,
  });

  const getContent = async (blockId?: string) => {
    return await client.blocks.children.list({
      block_id: blockId || runtimeConfig.rootPageId,
    });
  };

  return {
    client,
    getContent,
  };
};
