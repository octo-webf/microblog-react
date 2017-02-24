import {expect} from "chai";
import fetchMock from "fetch-mock";
import {fetchMessages, postMessage} from "./ApiHelper";

const messages = [
  {id: 'abcd', content: 'fakeContent', author: 'fakeAuthor'}
]

describe('ApiHelper component', () => {
  describe('getMessage when the query is successful', () => {
    beforeEach(() => (
      fetchMock.get('http://microblog-api.herokuapp.com/api/messages', messages)
    ))

    afterEach(fetchMock.restore)

    it('should return a response with the expected messages', () => {
      return fetchMessages()
        .then((response) => {
          expect(fetchMock.calls().matched).to.have.length(1)
          expect(response).to.deep.equal(messages)
        })
    })
  })

  describe('postMessage', () => {

    describe('when the query is successful', () => {
      beforeEach(() => (

        fetchMock.post('http://microblog-api.herokuapp.com/api/messages', {})
      ))

      afterEach(fetchMock.restore)

      it('should post a message', () => {
        const body = {
          author: 'toto',
          content: 'kikoo'
        }

        return postMessage(body)
          .then(() => {
            expect(fetchMock.calls().matched).to.have.length(1)
            expect(fetchMock.calls().matched[0][1].body).to.equal(JSON.stringify(body))
          })
      })

      it('should post with headers application/json', () => {
        const body = {
          author: 'toto',
          content: 'kikoo'
        }

        return postMessage(body)
          .then(() => {
            expect(fetchMock.calls().matched[0][1].headers['Content-Type']).to.equal('application/json')
          })
      })
    })
  })
})
