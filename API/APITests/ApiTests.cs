using Xunit;
using System;
using System.Threading.Tasks;
using System.Net.Http;

namespace APITests
{
    public class ApiTests
    {
        [Fact]
        public async Task GetQuestionEndpoint()
        {
            var apiClient = new HttpClient();

            var apiResponse = await apiClient.GetAsync("https://localhost:5001/api/question");

            Assert.True(apiResponse.IsSuccessStatusCode);

            var stringResponse = await apiResponse.Content.ReadAsStringAsync();

            Assert.StartsWith("[", stringResponse);
            Assert.EndsWith("]", stringResponse);
              //Assert.Contains("}]", stringResponse);
        }
        [Fact]
        public async Task GetSubjectsEndpoint()
        {
            var apiClient = new HttpClient();

            var apiResponse = await apiClient.GetAsync("https://localhost:5001/api/subject");

            Assert.True(apiResponse.IsSuccessStatusCode);

            var stringResponse = await apiResponse.Content.ReadAsStringAsync();

            Assert.StartsWith("[", stringResponse);
            Assert.EndsWith("]", stringResponse);
        }    
        [Fact]
        public async Task GetPaperEndpoint()
        {
            var apiClient = new HttpClient();

            var apiResponse = await apiClient.GetAsync("https://localhost:5001/api/paper");

            Assert.True(apiResponse.IsSuccessStatusCode);

            var stringResponse = await apiResponse.Content.ReadAsStringAsync();

            Assert.StartsWith("[", stringResponse);
            Assert.EndsWith("]", stringResponse);
              //Assert.Contains("}]", stringResponse);
        } 
        [Fact]
        public async Task GetExamEndpoint()
        {
            var apiClient = new HttpClient();

            var apiResponse = await apiClient.GetAsync("https://localhost:5001/api/exam");

            Assert.True(apiResponse.IsSuccessStatusCode);

            var stringResponse = await apiResponse.Content.ReadAsStringAsync();

            Assert.StartsWith("[{", stringResponse);
            Assert.EndsWith("}]", stringResponse);
              //Assert.Contains("}]", stringResponse);
         }
    }
}

