import { AxiosResponse } from 'axios';

import v3 from "../v3";

export default {
  validateRequest(
    scene: string,
    sceneId: number,
    headers = {},sessionKey:string,
  ): Promise<AxiosResponse> {
    return v3(
      'get',
      'protections/validate-request',
      { scene, sceneId },sessionKey,
      headers
    );
  }
};
