import "./App.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient, CreateUserDto } from "./apiClient";

function generateRandomTenDigitNumber() {
  // 1000000000 (10桁の最小値) から 9999999999 (10桁の最大値) までのランダムな数値を生成
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomFourCharacterString() {
  // 使用する文字のセット
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < 4; i++) {
    // 文字セットからランダムに文字を選択して結果に追加
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const apiClient = async () => {
  return new APIClient({ BASE: "http://localhost:3000" }).default;
};
const userAPI = apiClient();

export const Users: React.FC = () => {
  const queryClient = useQueryClient();
  // Queries

  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => (await userAPI).appControllerGetUsers(),
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: async (user: CreateUserDto) =>
      (await userAPI).appControllerCreateUser({
        requestBody: user,
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((user) => (
          <div key={user.id}>
            {" "}
            <div> id: {user.index} </div>
            <div> name: {user.name} </div>
            <div> gender: {user.gender} </div>
            <div> isAdmin: {String(user.accountConfig.isAdmin)} </div>
            <br />
          </div>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: generateRandomTenDigitNumber(),
            name: generateRandomFourCharacterString(),
            gender: "M",
            accountConfig: {
              isAdmin: true,
            },
          });
        }}
      >
        Add user
      </button>
    </div>
  );
};
