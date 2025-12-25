import { Either, Left, Right } from "../../../../base/core/Either";
import StatusResponse from "../../../../base/response/StatusResponse";
import HttpUtil from "../../../../network/HttpUtil";

interface AuthProviderServiceImplParams {
  http: HttpUtil;
}

export abstract class AuthProviderService {
  abstract logout(
    map: Record<string, any>
  ): Promise<Either<StatusResponse, StatusResponse>>;
}

export class AuthProviderServiceImpl implements AuthProviderService {
  readonly http: HttpUtil;
  constructor({ http }: AuthProviderServiceImplParams) {
    this.http = http;
  }

  async logout(
    map: Record<string, any>
  ): Promise<Either<StatusResponse, StatusResponse>> {
    const response = await this.http.post({
      uri: "",
      body: map,
    });

    return response.fold(
      (error) => new Left(error?.status),
      (response) => {
        const result = StatusResponse.fromMap(response);
        if (result.success === true) {
          return new Right(result);
        } else {
          return new Left(result);
        }
      }
    ) as any;
  }
}
