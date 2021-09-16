import { AxiosResponse } from 'axios';

import { apiv3 } from '..';

export default {
  validateRequest(
    scene: string,
    sceneId: number,
    headers = {},sessionKey:string,
  ): Promise<AxiosResponse> {
    return apiv3(
      'get',
      'protections/validate-request',
      { scene, sceneId },sessionKey,
      headers
    );
  }
};
